/*======================================================================
 * FILE:    ChapterComponent.tsx
 * AUTHOR:  Stephen W. Liddle
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Chapter component displaying a chapter's HTML.
 */

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useLoaderData } from "react-router-dom";
import "./ChapterComponent.css";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export default function ChapterComponent() {
    const chapterHtml = useLoaderData();

    return (
        <div className="with-nav-buttons">
            <div className="chapter-content" dangerouslySetInnerHTML={{ __html: chapterHtml }} />
        </div>
    );
}
