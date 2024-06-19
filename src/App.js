//import { DragDropContext } from "react-beautiful-dnd";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

function App() {
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
                    オプション1
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="option0" index={0}>
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
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
