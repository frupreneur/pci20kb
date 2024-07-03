"use client";

import React from "react";
import Image from "next/image";
import { GrDownload } from "react-icons/gr";

import { imagePreviewType } from "./ImageUpload";

const handleDownload = (
	preview: imagePreviewType[],
	fileToDownload: imagePreviewType
) => {
	if (preview) {
		const link = document.createElement("a");
		link.href = fileToDownload.url;
		link.download = "photoconvertinto20kb_com" + fileToDownload.name; // Change this to desired file name
		link.click();
	}
};

export default function ConvertedFile({
	previewFile,
	preview,
}: {
	previewFile: imagePreviewType;
	preview: imagePreviewType[];
}) {
	return (
		<div
			key={previewFile.name}
			className="flex flex-col justify-center items-center"
		>
			<Image
				src={previewFile.url}
				alt="Image preview"
				width={300}
				height={300}
			/>
			<div className="flex gap-1 justify-center items-center">
				<span>{(previewFile.oldSize / 1024).toFixed(2) + "KB"}</span>
				{`=>`}
				<span>{(previewFile.newSize / 1024).toFixed(2) + "KB"}</span>
			</div>
			<button
				className="btn mx-0 text-secondary"
				onClick={() => handleDownload(preview, previewFile)}
			>
				{" "}
				DOWNLOAD{" "}
				<span>
					<GrDownload className="text-secondary font-bold" />
				</span>
			</button>
		</div>
	);
}
