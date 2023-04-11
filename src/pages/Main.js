import React from "react";
import Canvas from "../components/canvas/Canvas";
import Nav from "../components/choice/Nav";
export default function Main() {
  return (
    <div>
      <header>
        <h1>나만의 다육이 만들기</h1>
      </header>
      <main>
        <Canvas />
        <Nav />
      </main>
      <nav>
        <button>저장하기</button>
        <button>공유하기</button>
      </nav>
    </div>
  );
}
