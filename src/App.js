//import { DragDropContext } from "react-beautiful-dnd";
import React from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const DragDrop = () => {
  return (
    <div className="App">
      <DragDropContext>
        <Droppable droppableId="chars">
          {(provided) => (
            <div
              className="optionList"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Draggable draggableId="option0" index={0}>
                {(provided) => (
                  <div
                    className="option"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    オプション0
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="option1" index={1}>
                {(provided) => (
                  <div
                    className="option"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    オプション1
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="option2" index={2}>
                {(provided) => (
                  <div
                    className="option"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    オプション2
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="option3" index={3}>
                {(provided) => (
                  <div
                    className="option"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    オプション3
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragDrop;
