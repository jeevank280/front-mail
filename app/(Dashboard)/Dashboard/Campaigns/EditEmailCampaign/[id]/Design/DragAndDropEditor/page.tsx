"use client";

import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    emailbuilder: any;
  }
}

const DragAndDropEditor: React.FC = () => {
  const builderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeBuilder = () => {
      if (window.emailbuilder && builderRef.current) {
        const builder = new window.emailbuilder.Builder({
          container: builderRef.current,
          onSave: (data: any) => {
            console.log("Email template saved:", data);
          },
          // Add your specific options here, e.g., custom templates, blocks, etc.
        });

        return () => {
          builder.destroy(); // Clean up on component unmount
        };
      }
    };

    if (document.readyState === "complete") {
      initializeBuilder();
    } else {
      window.addEventListener("load", initializeBuilder);
      return () => window.removeEventListener("load", initializeBuilder);
    }
  }, []);

  return <div ref={builderRef} style={{ height: "100vh", width: "100%" }} />;
};

export default DragAndDropEditor;

// import React, { useRef } from "react";

// import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";

// export default function DragAndDropEditor({ params }: any) {
//   const emailEditorRef = useRef<EditorRef>(null);

//   const exportHtml = () => {
//     const unlayer = emailEditorRef.current?.editor;

//     unlayer?.exportHtml((data) => {
//       const { design, html } = data;
//       console.log("exportHtml", html);
//     });
//   };

//   const onReady: EmailEditorProps["onReady"] = (unlayer) => {
//     // editor is ready
//     // you can load your template here;
//     // the design json can be obtained by calling
//     // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
//     // const templateJson = { DESIGN JSON GOES HERE };
//     // unlayer.loadDesign(templateJson);
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={exportHtml}>Export HTML</button>
//       </div>

//       <EmailEditor ref={emailEditorRef} onReady={onReady} />
//     </div>
//   );
// }
