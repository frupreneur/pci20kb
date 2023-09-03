import React from "react";
import Link from "next/link";
import classes from "./Article.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <article className={classes.articleClass}>
        <h1>Terms and Conditions of Use</h1>
        <ul>
          <li>
            <h2>1. Acceptance of Terms</h2>
            <p>
              {`By accessing and using the PhotoConvertInto20KB.com website (the
              "Website"), you agree to comply with and be bound by these Terms
              and Conditions of Use. If you do not agree to these terms, please
              do not use our Website.`}
            </p>
          </li>
          <li>
            <h2>2. Use of the Website</h2>
            <h3>2.1. You must be at least 18 years old to use this Website.</h3>
            <h3>
              2.2. You agree not to use the Website for any illegal or
              unauthorized purpose.
            </h3>
            <h3>
              2.3. You are solely responsible for the content you upload and
              convert on the Website.
            </h3>
          </li>
          <li>
            <h2>3. Privacy</h2>
            <h3>
              3.1. Your use of the Website is also governed by our Privacy
              Policy, which is incorporated by reference into these Terms and
              Conditions of Use.
            </h3>
          </li>
          <li>
            <h2>4. Copyright and Intellectual Property</h2>
            <h3>
              4.1. All content and materials on the Website, including but not
              limited to text, graphics, logos, images, and software, are the
              property of PhotoConvertInto20KB.com and are protected by
              copyright and other intellectual property laws.
            </h3>
            <h3>
              4.2. You may not use, reproduce, or distribute any content from
              the Website without the express written permission of
              PhotoConvertInto20KB.com.
            </h3>
          </li>
          <li>
            <h2>5. Limitation of Liability</h2>
            <h3>
              5.1. PhotoConvertInto20KB.com and its affiliates, officers,
              directors, employees, and agents shall not be liable for any
              damages, including but not limited to direct, indirect,
              incidental, consequential, or punitive damages, arising from or
              related to the use of the Website.
            </h3>
          </li>
          <li>
            <h2>6. Indemnification</h2>
            <h3>
              {`6.1. You agree to indemnify and hold PhotoConvertInto20KB.com and its affiliates, officers, directors, employees, and agents harmless from any claims, losses, or damages, including reasonable attorney's fees, arising from your use of the Website or any violation of these Terms and Conditions of Use.`}
            </h3>
          </li>
          <li>
            <h2>7. Modification of Terms</h2>
            <h3>{`7.1. PhotoConvertInto20KB.com reserves the right to modify or update these Terms and Conditions of Use at any time without prior notice. It is your responsibility to review these terms periodically for changes.

`}</h3>
          </li>
          <li>
            <h2>8. Termination</h2>
            <h3>
              8.1. PhotoConvertInto20KB.com reserves the right to terminate or
              suspend your access to the Website at any time for any reason,
              including without limitation, any violation of these Terms and
              Conditions of Use.
            </h3>
          </li>
          <li>
            <h2>9. Governing Law</h2>
            <h3>
              9.1. These Terms and Conditions of Use shall be governed by and
              construed in accordance with the laws of [Your Jurisdiction],
              without regard to its conflict of law principles.
            </h3>
          </li>
          <li>
            <h2>10. Contact Information</h2>
            <h3>
              10.1. If you have any questions or concerns about these Terms and
              Conditions of Use, please contact us.
            </h3>
          </li>
        </ul>
      </article>
    </>
  );
}
