import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

// 初期のアイテムリスト
const initialItems = [
  { id: 'option0', content: 'オプション0' },
  { id: 'option1', content: 'オプション1' },
  { id: 'option2', content: 'オプション2' },
  { id: 'option3', content: 'オプション3' },
];

// アイテムの並べ替え関数
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const App = () => {
  const [items, setItems] = useState(initialItems); // 状態管理を追加

  // ドラッグ終了時の処理
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(reorderedItems); // 状態を更新
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}> {/* onDragEnd を追加 */}
        <Droppable droppableId="chars">
          {(provided) => (
            <div
              className="optionList"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, index) => ( // 状態からアイテムを描画
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      className="option"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder} {/* placeholder を追加 */}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default App;
