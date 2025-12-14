"use client"

import type React from "react"

import { useState, useRef } from "react"
import { GripVertical, Plus, Trash2, Pencil } from "lucide-react"

export function MeetBoardSection() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Drag me!", x: 20, y: 20, color: "#FEEA82" },
    { id: 2, text: "Interactive!", x: 60, y: 15, color: "#9AF7CA" },
    { id: 3, text: "Try erasing", x: 35, y: 50, color: "#A4D7F5" },
  ])

  const [isDragging, setIsDragging] = useState<number | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [selectedNote, setSelectedNote] = useState<number | null>(null)

  const [isDrawing, setIsDrawing] = useState(false)
  const [drawMode, setDrawMode] = useState(false)
  const [paths, setPaths] = useState<string[]>([])
  const [currentPath, setCurrentPath] = useState<string>("")

  const boardRef = useRef<HTMLDivElement>(null)

  const addNote = () => {
    const colors = ["#FEEA82", "#9AF7CA", "#A4D7F5", "#FFB6C1", "#DDA0DD"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const randomX = Math.floor(Math.random() * 70) + 10
    const randomY = Math.floor(Math.random() * 60) + 10

    const newNote = {
      id: Date.now(),
      text: "New note!",
      x: randomX,
      y: randomY,
      color: randomColor,
    }

    setNotes([...notes, newNote])
  }

  const deleteSelectedNote = () => {
    if (selectedNote !== null) {
      setNotes(notes.filter((note) => note.id !== selectedNote))
      setSelectedNote(null)
    }
  }

  const handleMouseDown = (e: React.MouseEvent, noteId: number) => {
    if (!boardRef.current) return

    const boardRect = boardRef.current.getBoundingClientRect()
    const note = notes.find((n) => n.id === noteId)
    if (!note) return

    const noteLeft = (note.x / 100) * boardRect.width
    const noteTop = (note.y / 100) * boardRect.height

    setDragOffset({
      x: e.clientX - boardRect.left - noteLeft,
      y: e.clientY - boardRect.top - noteTop,
    })
    setIsDragging(noteId)
    setSelectedNote(noteId)
  }

  const handleNoteClick = (e: React.MouseEvent, noteId: number) => {
    e.stopPropagation()
    setSelectedNote(noteId)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging !== null && !drawMode) {
      if (!boardRef.current) return
      const boardRect = boardRef.current.getBoundingClientRect()
      const newX = ((e.clientX - boardRect.left - dragOffset.x) / boardRect.width) * 100
      const newY = ((e.clientY - boardRect.top - dragOffset.y) / boardRect.height) * 100

      const clampedX = Math.max(0, Math.min(90, newX))
      const clampedY = Math.max(0, Math.min(85, newY))

      setNotes(notes.map((note) => (note.id === isDragging ? { ...note, x: clampedX, y: clampedY } : note)))
      return
    }

    if (isDrawing && drawMode && boardRef.current) {
      const boardRect = boardRef.current.getBoundingClientRect()
      const x = e.clientX - boardRect.left
      const y = e.clientY - boardRect.top

      setCurrentPath((prev) => `${prev} L ${x} ${y}`)
    }
  }

  const handleMouseUp = () => {
    if (isDrawing && currentPath) {
      setPaths([...paths, currentPath])
      setCurrentPath("")
    }
    setIsDrawing(false)
    setIsDragging(null)
  }

  const clearDrawings = () => {
    setPaths([])
    setCurrentPath("")
  }

  const toggleDrawMode = () => {
    setDrawMode(!drawMode)
    setSelectedNote(null)
  }

  const handleBoardMouseDown = (e: React.MouseEvent) => {
    if (!drawMode || !boardRef.current) return

    const boardRect = boardRef.current.getBoundingClientRect()
    const x = e.clientX - boardRect.left
    const y = e.clientY - boardRect.top

    setIsDrawing(true)
    setCurrentPath(`M ${x} ${y}`)
  }

  const handleBoardMouseMove = (e: React.MouseEvent) => {
    if (isDragging !== null && !drawMode) {
      if (!boardRef.current) return
      const boardRect = boardRef.current.getBoundingClientRect()
      const newX = ((e.clientX - boardRect.left - dragOffset.x) / boardRect.width) * 100
      const newY = ((e.clientY - boardRect.top - dragOffset.y) / boardRect.height) * 100

      const clampedX = Math.max(0, Math.min(90, newX))
      const clampedY = Math.max(0, Math.min(85, newY))

      setNotes(notes.map((note) => (note.id === isDragging ? { ...note, x: clampedX, y: clampedY } : note)))
      return
    }

    if (isDrawing && drawMode && boardRef.current) {
      const boardRect = boardRef.current.getBoundingClientRect()
      const x = e.clientX - boardRect.left
      const y = e.clientY - boardRect.top

      setCurrentPath((prev) => `${prev} L ${x} ${y}`)
    }
  }

  const handleBoardMouseUp = () => {
    if (isDrawing && currentPath) {
      setPaths([...paths, currentPath])
      setCurrentPath("")
    }
    setIsDrawing(false)
    setIsDragging(null)
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet the Board.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineered for thinkers, learners, and makers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            ref={boardRef}
            className="relative bg-background border-2 border-border rounded-3xl shadow-2xl overflow-hidden h-[500px] sketch-grid"
            style={{ cursor: drawMode ? "crosshair" : "default" }}
            onMouseDown={handleBoardMouseDown}
            onMouseMove={handleBoardMouseMove}
            onMouseUp={handleBoardMouseUp}
            onMouseLeave={handleBoardMouseUp}
          >
            {/* Board controls */}
            <div className="absolute top-4 left-4 flex gap-2 z-20">
              <button
                onClick={addNote}
                disabled={drawMode}
                className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={deleteSelectedNote}
                disabled={drawMode}
                className="p-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={toggleDrawMode}
                className={`p-2 rounded-lg transition-colors shadow-md ${
                  drawMode
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
              >
                <Pencil className="w-4 h-4" />
              </button>
              {paths.length > 0 && (
                <button
                  onClick={clearDrawings}
                  className="p-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors shadow-md"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="absolute bottom-4 right-4 text-sm text-muted-foreground bg-card px-3 py-1 rounded-lg border border-border shadow-md z-20">
              100%
            </div>

            {/* Draggable sticky notes */}
            {notes.map((note) => (
              <div
                key={note.id}
                className="absolute p-4 shadow-lg cursor-move rounded-lg border-2 transition-transform hover:scale-105 hover:shadow-xl select-none"
                style={{
                  left: `${note.x}%`,
                  top: `${note.y}%`,
                  backgroundColor: note.color,
                  borderColor: selectedNote === note.id ? "#1F1F1F" : note.color,
                  borderWidth: selectedNote === note.id ? "3px" : "2px",
                  transform: isDragging === note.id ? "rotate(5deg) scale(1.05)" : "rotate(0deg)",
                  zIndex: isDragging === note.id ? 15 : selectedNote === note.id ? 12 : 10,
                  pointerEvents: drawMode ? "none" : "auto",
                }}
                onMouseDown={(e) => !drawMode && handleMouseDown(e, note.id)}
                onClick={(e) => !drawMode && handleNoteClick(e, note.id)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <GripVertical className="w-4 h-4 text-foreground/40" />
                  <span className="text-xs text-foreground/60 font-medium">Note {note.id}</span>
                </div>
                <p className="text-foreground font-medium">{note.text}</p>
              </div>
            ))}

            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 8 }}>
              {/* Sample doodles */}
              <path
                d="M 200 300 Q 250 250, 300 300"
                stroke="#1F1F1F"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.3"
              />
              <circle cx="450" cy="200" r="40" stroke="#A4D7F5" strokeWidth="3" fill="none" opacity="0.4" />
              <line x1="100" y1="400" x2="250" y2="400" stroke="#9AF7CA" strokeWidth="3" opacity="0.5" />

              {paths.map((path, index) => (
                <path
                  key={index}
                  d={path}
                  stroke="#1F1F1F"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}

              {/* Current drawing path */}
              {currentPath && (
                <path
                  d={currentPath}
                  stroke="#1F1F1F"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>

            {/* Instructions overlay */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg">
              <p className="text-sm text-muted-foreground">
                <span className="inline-block mr-2">👆</span>
                {drawMode
                  ? "Draw on board • Click pencil to exit draw mode"
                  : "Click to select • Drag to move • Delete selected note"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
