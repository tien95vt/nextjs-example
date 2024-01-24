import { Suspense } from "react";
import ImageContent from "@/app/fetch-server-side/image-content";


function TestFetch() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <ImageContent />
        </Suspense>
    );
}

export default TestFetch;