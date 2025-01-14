import React from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import mockData from "../../mockData"
import Card from "../card/Card"
import { useState } from "react"
import "./kanban.css"
export default function Kanban() {
    // datos de ejemplo
    const [data, setData] = useState(mockData)

    const onDragEnd = (result) => {
        if (!result.destination) return
        const { source, destination } = result
        if (source.droppableId !== destination.droppableId) {
            //id de origen
            const sourceColIndex = data.findIndex(
                (item) => item.id === source.droppableId
            )
            //id de destino
            const detinationColIndex = data.findIndex(
                (item) => item.id === destination.droppableId
            )
            const sourceCol = data[sourceColIndex]
            const destinationCol = data[detinationColIndex]

            //probar si funciona sin el spreed (...)
            const sourceTasks = [...sourceCol.task]
            const destinationTasks = [...destinationCol.task]

            // el splice elimina el elemento de la lista y retorna el elemento eliminado
            const [removed] = sourceTasks.splice(source.index, 1)
            // agrega el elemento en la posicion indicada, no solo al final en caso de que se soltara a la mitad de la lista
            destinationTasks.splice(destination.index, 0, removed)
            //actualizar los datos de las tareas
            data[sourceColIndex].task = sourceTasks
            data[detinationColIndex].task = destinationTasks
        }

    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='kanban'>
                {data.map((section) => (
                    <Droppable key={section.id} droppableId={section.id}>
                        {
                            (provided) => (
                                <div {...provided.droppableProps} className='kanban_section' ref={provided.innerRef}>
                                    <div className='kanban_section_title'>
                                        {section.title}
                                    </div>
                                    <div className='kanban_section_content'>
                                        {section.task.map((task, index) => (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div className='cardSpace' ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={
                                                            { ...provided.draggableProps.style, opacity: snapshot.isDragging ? "0.5" : "1" }
                                                        }>
                                                        <Card>
                                                            {task.title}
                                                        </Card>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    )
}
