"use client";

import React, { useState } from "react";
import * as dropZone from "react-dropzone";
import { handleCompression } from "@/utils";
import Image from "next/image";
import Select from "react-select";
import { useDropzone } from "react-dropzone";

import ConvertedFile from "./ConvertedFile";

interface File extends Blob {
	readonly lastModified: number;
	readonly name: string;
}
export type imagePreviewType = {
	name: string;
	oldSize: number;
	newSize: number;
	url: string;
};
const compressionValueOptions = [
	{ value: 20000, label: "20KB" },
	{ value: 50000, label: "50KB" },
	{ value: 100000, label: "100KB" },
	{ value: 200000, label: "200KB" },
	{ value: 250000, label: "250KB" },
	{ value: 500000, label: "500KB" },
];

async function compressFile(
	files: File[],
	compressionValue: (typeof compressionValueOptions)[0],
	holderArr: imagePreviewType[],
	handleCompression: (x: File, y: number) => Promise<any>
) {
	const promises = files.map((file: File) =>
		handleCompression(file, compressionValue.value).then(
			(compressedFile: File) => {
				let url = URL.createObjectURL(compressedFile);

				holderArr.push({
					name: compressedFile.name,
					oldSize: file.size,
					newSize: compressedFile.size,
					url,
				});
			}
		)
	);

	await Promise.all(promises);
}

export default function ImageUpload({
	compressTo,
}: {
	compressTo: { value: number; label: string };
}) {
	const [files, setFiles] = React.useState<File[] | []>([]);
	const [preview, setPreview] = useState<imagePreviewType[] | []>([]);
	const [converting, setConverting] = useState<true | false>(false);
	const [compressionValue, setCompressionValue] =
		useState<(typeof compressionValueOptions)[0]>(compressTo);
	const [convertedFiles, setConvertedFiles] = useState<imagePreviewType[]>([]);

	const onDrop = React.useCallback((acceptedFiles: File[]) => {
		setConverting(true);
		setFiles([...acceptedFiles]);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	React.useEffect(() => {
		setFiles([]);
		setPreview([]);
		setConverting(false);
	}, [compressionValue]);

	React.useEffect(() => {
		if (files.length > 0) {
			setConverting(true);
			const holderArr: imagePreviewType[] = [];

			compressFile(files, compressionValue, holderArr, handleCompression).then(
				() => {
					setConvertedFiles(holderArr);
				}
			);
		}
	}, [files, compressionValue]);

	React.useEffect(() => {
		if (convertedFiles.length > 0) {
			setConverting(false);
			setPreview(convertedFiles);
		}
	}, [convertedFiles]);

	return (
		<>
			<div className="flex justify-center gap-2 items-center my-1">
				<p className="">
					Convert / Compress To: <span className="text-primary">{`=>`}</span>
				</p>
				<label htmlFor="react-select-select-box-input">
					<Select
						className=""
						options={compressionValueOptions}
						defaultValue={compressTo}
						// @ts-ignore
						onChange={setCompressionValue}
						instanceId="select-box"
					/>
				</label>
			</div>

			<div
				className={
					converting
						? `flex flex-col w-full h-[150px] justify-center items-center border-dashed border-2 border-sky-500 my-5 rounded-lg bg-secondary text-primary`
						: `flex flex-col w-full h-[150px] justify-center items-center border-dashed border-2 border-sky-500 my-5 rounded-lg`
				}
				{...getRootProps()}
				style={{ backgroundColor: isDragActive ? "#FFFAFA" : "" }}
			>
				<input {...getInputProps()} />
				{isDragActive ? (
					<>
						<input
							type="file"
							multiple
							accept="image/*,video/*"
							name="nameFOR"
							id="nameFOR"
							style={{ display: "none" }}
							onChange={(event: any) => {
								setConverting(true);
								setFiles([...event.target.files]);
							}}
						/>
						<p>Drop the files here ...</p>
					</>
				) : (
					<>
						{!converting ? (
							<>
								<p className="underline text-primary my-0">{`Click HERE to Select Image(s)`}</p>
								<p className="my-2">OR</p>

								<p className="my-0">{`Drag 'n' drop Image(s) here`}</p>
							</>
						) : (
							<p className="">Converting. Please Wait...</p>
						)}
					</>
				)}
			</div>

			{preview.length > 0 && (
				<div className="w-full h-full">
					<div className="w-full h-1 rounded bg-[gray]"></div>
					<h2>Compressed Image(s)</h2>
					<div className="w-full h-1 rounded bg-[gray]"></div>
					<div className="previewBody w-full h-full flex flex-col items-center justify-center p-5 gap-5">
						{preview.map((previewFile) => {
							return (
								<ConvertedFile
									key={previewFile.name}
									preview={preview}
									previewFile={previewFile}
								/>
							);
						})}
					</div>
					<div className="w-full h-1 rounded bg-[gray]"></div>
				</div>
			)}
		</>
	);
}
