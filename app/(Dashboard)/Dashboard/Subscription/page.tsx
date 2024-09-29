"use client";

import { useState, useRef, useEffect } from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from "@nextui-org/react";
import { ArrowLeft, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, Image, Link, Type, Layout } from "lucide-react";
import EmailEditor from 'react-email-editor';

export default function EmailTemplateEditor({ params }: any) {
  const emailEditorRef = useRef<any>(null);
  const [templateName, setTemplateName] = useState("");
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    if (emailEditorRef.current && emailEditorRef.current.editor) {
      setEditorLoaded(true);
    }
  }, [emailEditorRef]);

  const handleExport = () => {
    if (emailEditorRef.current && editorLoaded) {
      emailEditorRef.current.editor.exportHtml((data: any) => {
        const { design, html } = data;
        console.log('Exported HTML:', html);
        console.log('Exported design JSON:', design);
        // Here you would typically send this data to your backend
      });
    }
  };

  const handleSave = () => {
    if (emailEditorRef.current && editorLoaded) {
      emailEditorRef.current.editor.saveDesign((design: any) => {
        console.log('Saved design JSON:', design);
        // Here you would typically send this design to your backend
      });
    }
  };

  const handleLoad = () => {
    if (emailEditorRef.current && editorLoaded) {
      // Load a sample template
      emailEditorRef.current.editor.loadDesign({
        "body": {
          "rows": [
            {
              "cells": [1],
              "columns": [
                {
                  "contents": [
                    {
                      "type": "text",
                      "values": {
                        "text": "Welcome to our newsletter!"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      });
    }
  };

  return (
    <div className="max-w-[85rem] flex flex-col mx-4 mb-9 sm:mx-6 lg:mx-8">
      <div className="flex flex-row justify-between mb-8">
        <div className="flex items-center">
          <Button
            startContent={<ArrowLeft size={"16px"} />}
            color="default"
            size="sm"
            variant="flat"
          >
            Back
          </Button>
          <span className="text-md ml-3">Email Template Editor</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <Input
          placeholder="Template Name"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
        />
        <Button color="primary" onClick={handleSave}>Save Template</Button>
        <Button color="secondary" onClick={handleLoad}>Load Template</Button>
        <Button color="success" onClick={handleExport}>Export HTML</Button>
      </div>

      <div className="border border-gray-300 rounded-lg h-[600px]">
        <EmailEditor
          ref={emailEditorRef}
          onReady={() => setEditorLoaded(true)}
          minHeight="600px"
          options={{
            customCSS: [
              'https://your-custom-css-url.com/styles.css'
            ],
            features: {
              textEditor: {
                tables: true,
                emojis: true,
              },
            },
            tools: {
              image: {
                enabled: true,
                properties: {
                  src: {
                    value: 'https://your-default-image-url.com/image.jpg'
                  }
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
}
