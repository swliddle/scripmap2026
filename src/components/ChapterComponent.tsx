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
import { useLoaderData, useParams } from "react-router-dom";
import "./ChapterComponent.css";
import { NextSideComponent, PreviousSideComponent } from "./NextPreviousComponent";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export default function ChapterComponent() {
    const { bookId, chapter } = useParams();
    const chapterHtml = useLoaderData();

    return (
        <div className="with-nav-buttons">
            <PreviousSideComponent bookId={bookId} chapter={chapter} />
            <div className="chapter-content" dangerouslySetInnerHTML={{ __html: chapterHtml }} />
            <NextSideComponent bookId={bookId} chapter={chapter} />
        </div>
    );
}
