## Background layers

``
css/_ Main page background — darkest _/
bg-[#1a1a1a]

/_ Sidebar background _/
bg-[#1f1f1f]

/_ Cards / panels background _/
bg-[#2a2a2a]

/_ Input / draft area background _/
bg-[#333333]
``

## Text colors

``
css/_ Primary text — headings, document titles _/
text-white

/_ Secondary text — "2 hours ago", "32k remaining" _/
text-[#888888]

/_ Muted labels — "RECENT DOCUMENTS", "OUTPUT BY TYPE" _/
text-[#666666]

Accent colors
css/_ Sidebar active item left border _/
border-l-[#7C6FF7] /_ purple _/

/_ Sidebar active item text _/
text-[#7C6FF7]

/_ Positive delta — "+12 this week", "+6.2k today" _/
text-[#4ade80] /_ green _/
``

## Badges

``
css/_ Email badge _/
bg-[#2a2a2a] text-white border border-[#444444]

/_ Blog badge _/
bg-[#4ade80] text-[#1a1a1a] /_ green _/

/_ Ad copy badge _/
bg-[#fb923c] text-[#1a1a1a] /_ orange _/
``

## Chart bars

``
css/_ Blog bar _/
bg-[#7C6FF7] /_ purple _/

/_ Email bar _/
bg-[#4ade80] /_ green _/

/_ Ad copy bar _/
bg-[#fb923c] /_ orange _/

/_ Social bar _/
bg-[#f472b6] /_ pink _/
``

## Token usage bar

``
css/_ Track _/
bg-[#333333]

/_ Fill _/
bg-[#7C6FF7]
``

## Borders

``
css/_ Card borders _/
border border-[#3a3a3a]

/_ Sidebar right border _/
border-r border-[#2f2f2f]
``
--

# Build order

## LAYOUT

-Sidebar
-Topbar
-Page container

## ROUTING

-Dashboard
-Editor
-History
-Templates

## TYPES

type Document = {
id: string
title: string
content: string
type: "blog" | "email" | "ad"
createdAt: string
}

## DOCUMENT SYSTEM

Create store:

-documents[]
-currentDocument

Actions:

-createDocument
-saveDocument
-deleteDocument
-setCurrentDocument

## EDITOR SYSTEM

UI:
-textarea / editor
-generate button
save button
-Logic:
-content state
-update content
-call fake AI

## CONNECT EDITOR + STORE

-saving adds document
-opening loads document

## HISTORY PAGE

-list of documents
-click → open in editor

## DASHBOARD

-stats cards
-recent docs
-usag

## TEMPLATES PAGE

-predefined prompts
-click → open editor with prefilled data

## POLISH

-loading states
-typing animation
-empty states
-toast messages
