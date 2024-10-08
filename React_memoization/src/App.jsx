import SlowComponent from "./components/SlowComponents";
import Modal from "./components/Modal";
import { useState, memo, useCallback, useMemo } from "react";
import "./App.css";
import AnotherSlowComponents from "./components/AnotherSlowComponents";

// function App() {
//     const [isOpen, setisOpen] = useState(false);
//     //if isOpen state changes, there will be no changes in SlowComponent, so y SlowComponent is re-rendering unecsssary,
//     //better to memoize the SlowComponent means no new object/react-element should be created before and after VDOM

//     return (
//         <>
//             <h1>Memoization</h1>
//             <button onClick={() => setisOpen(true)}>Open Modal</button>
//             <p>something done here</p>
//             {isOpen && <Modal setisOpen={setisOpen} />}
//             <p>something done here</p>
//             <SlowComponent />
//         </>
//     );
// }
//--------------------------------------------------------------------------------------------------------------
//---->React.memo()
// const MemoizedSlowComponent = memo(SlowComponent);

// function App() {
//     const [isOpen, setisOpen] = useState(false);
//     return (
//         <>
//             <h1>Memoization</h1>
//             <button onClick={() => setisOpen(true)}>Open Modal</button>
//             <p>something done here</p>
//             {isOpen && <Modal setisOpen={setisOpen} />}
//             <p>something done here</p>
//             <MemoizedSlowComponent />
//         </>
//     );

//-----------------------------------------------------------------------------------------------------------
//React.memo() with props
//1.--->if memoized component prop is primitive value then no re-render, if prop is non-primitive value then re-render even if component is memoized
//here passing array and custom callback as prop so re-render. How to stop re-render of slowComponent???
//with the help of useMemo() and useCallback() it will not create a new prop(no new prop object) so no re-render of slowComponent

// const MemoizedSlowComponent = memo(({ time, custom }) => {
//     return <SlowComponent time={time} callback={custom} />;
// });

// function App() {
//     const [isOpen, setisOpen] = useState(false);
//     //
//     const someFunction = useCallback(() => {
//         console.log("hello");
//     }, []);

//     const timeMemo = useMemo(() => {
//         return [1000, 2000];
//     }, []);
//     return (
//         <>
//             <h1>Memoization</h1>
//             <button onClick={() => setisOpen(true)}>Open Modal</button>
//             <p>something done here</p>
//             {isOpen && <Modal setisOpen={setisOpen} />}
//             <p>something done here</p>
//             <MemoizedSlowComponent time={timeMemo} custom={someFunction} />
//         </>
//     );
// }
//-------------------------------------------------------------------------------------------------------------------
//2.--->passing state variable as prop in memoized component
//it will re-render becoz of state variable

// const MemoizedSlowComponent = memo(({ time, custom, val }) => {
//     return <SlowComponent time={time} callback={custom} val={val} />;
// });

// function App() {
//     const [isOpen, setisOpen] = useState(false);
//     const [x, setx] = useState(0);

//     const someFunction = useCallback(() => {
//         console.log("hello");
//     }, []);

//     const timeMemo = useMemo(() => {
//         return [1000, 2000];
//     }, []);
//     return (
//         <>
//             <h1>Memoization</h1>
//             <button onClick={() => setisOpen(true)}>Open Modal</button>
//             <p>something done here</p>
//             {isOpen && <Modal setisOpen={setisOpen} />}
//             <p>something done here</p>
//             <button onClick={() => setx(x + 1)}>increment</button>

//             <MemoizedSlowComponent
//                 time={timeMemo}
//                 custom={someFunction}
//                 val={x}
//             />
//         </>
//     );
// }

//---------------------------------------------------------------------------------------------------------------
//3.-----> component as children
//if component as a children is passed from another comp then no re-render of memoized another slow compnonent
//if component as a children is defined or call, then re-render of memoized another slow component

// const MemoizedSlowComponent = memo(({ time, custom }) => {
//     return <SlowComponent time={time} callback={custom} />;
// });

// const MemoizedAnotherSlowComponents = memo(AnotherSlowComponents);

// function App() {
//     const [isOpen, setisOpen] = useState(false);
//     const [x, setx] = useState(0);

//     const someFunction = useCallback(() => {
//         console.log("hello");
//     }, []);

//     const timeMemo = useMemo(() => {
//         return [1000, 2000];
//     }, []);
//     return (
//         <>
//             <h1>Memoization</h1>
//             <button onClick={() => setisOpen(true)}>Open Modal</button>
//             <p>something done here</p>
//             {isOpen && <Modal setisOpen={setisOpen} />}
//             <p>something done here</p>

//             <MemoizedSlowComponent time={timeMemo} custom={someFunction} />
//             <MemoizedAnotherSlowComponents>
//                 <div>inside another slow components</div>
//             </MemoizedAnotherSlowComponents>
//         </>
//     );
// }

//----------------------------------------------------------------------------------------------------------------------
//3.1--->react.memo() then also re-render

// const MemoizedSlowComponent = memo(({ time, custom }) => {
//     return <SlowComponent time={time} callback={custom} />;
// });

// const MemoizedAnotherSlowComponents = memo(AnotherSlowComponents);
// const Child = memo(function () {
//     return <div>inside another slow component</div>;
// });
// function App() {
//     const [isOpen, setisOpen] = useState(false);
//     const [x, setx] = useState(0);

//     const someFunction = useCallback(() => {
//         console.log("hello");
//     }, []);

//     const timeMemo = useMemo(() => {
//         return [1000, 2000];
//     }, []);
//     return (
//         <>
//             <h1>Memoization</h1>
//             <button onClick={() => setisOpen(true)}>Open Modal</button>
//             <p>something done here</p>
//             {isOpen && <Modal setisOpen={setisOpen} />}
//             <p>something done here</p>

//             <MemoizedSlowComponent time={timeMemo} custom={someFunction} />
//             <MemoizedAnotherSlowComponents>
//                 <Child />
//             </MemoizedAnotherSlowComponents>
//         </>
//     );
// }

//--------------------------------------------------------------------------------------------------------------------
//3.2 useMemo() no re-render of child prop ,so no re-render of MemoizedAnotherSlowComponent
const MemoizedSlowComponent = memo(({ time, custom }) => {
    return <SlowComponent time={time} callback={custom} />;
});

const MemoizedAnotherSlowComponents = memo(AnotherSlowComponents);

function Child() {
    return <div>inside another slow component</div>;
}

function App() {
    const [isOpen, setisOpen] = useState(false);
    const [x, setx] = useState(0);

    const someFunction = useCallback(() => {
        console.log("hello");
    }, []);

    const timeMemo = useMemo(() => {
        return [1000, 2000];
    }, []);

    const ChildMemo = useMemo(() => {
        <Child />;
    }, []);

    return (
        <>
            <h1>Memoization</h1>
            <button onClick={() => setisOpen(true)}>Open Modal</button>
            <p>something done here</p>
            {isOpen && <Modal setisOpen={setisOpen} />}
            <p>something done here</p>

            <MemoizedSlowComponent time={timeMemo} custom={someFunction} />
            <MemoizedAnotherSlowComponents>
                {ChildMemo}
            </MemoizedAnotherSlowComponents>
        </>
    );
}

export default App;
