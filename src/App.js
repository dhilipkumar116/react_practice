import React from 'react';
import './App.css';
import Greet from './components/props/Greet';
import Classcomponent from './components/Classcomponent';
import Hello from './components/Hello';
import Message from './components/state/Message';
import Counter from './components/state/Counter';
import FunctionClick from './components/eventHanding/FunctionClick';
import ClassClick from './components/eventHanding/ClassClick';
import EventHand from './components/eventHanding/EventHand';
import ParentComponent from './components/methodAsProps/ParentComponent';
import UserGreeting from './components/conditionalRendering/UserGreeting';
import NameList from './components/listRendering/NameList';
import Form from './components/formHandling/Form';
import LifecycleA from './components/lifeCycle/LifecycleA';
import Table from './components/fragmentDemo/Table';
import PureComp from './components/purecomponentDemo/PureComp';
import ParentComp from './components/purecomponentDemo/ParentComp';
import RefsDemp from './components/refsDemo/RefsDemp';
import FocusInput from './components/refsDemo/FocusInput';
import FRrefsParent from './components/refsDemo/forwardingRefs/FRrefsParent';
import PortalDemo from './components/Portals/PortalDemo';
import Main from './components/errorBoundary/Main';
import ClickCounter from './components/higherOrderComp/ClickCounter';
import HoverCounter from './components/higherOrderComp/HoverCounter';
import ClickCounterTwo from './components/renderProps/ClickCounterTwo';
import HoverCounterTwo from './components/renderProps/HoverCounterTwo';
import User from './components/renderProps/User';
import Counter2 from './components/renderProps/Counter';
import ComponentC from './components/contextDemo/ComponentC';
import { UserProvider } from './components/contextDemo/UserContext';
import Welcome from './components/props/Welcome';
import List from './components/temp/List';
import UseMemoWords from './hooks/useMemo/UseMemoWords';
import UseMemoCounter from './hooks/useMemo/UseMemoCounter';
function App() {
  return (
    <div className='App'>
      {/* context */}
      {/* this provide value to all descendant comps */}
      {/* we can consume context value in any comps */}
      {/* <UserProvider value='dhilip'>
        <ComponentC />
      </UserProvider> */}

      {/* render props */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User name={(isLoggedIn)=> isLoggedIn?'dhilip':'guest'}/>
 */}
      {/* <Counter2
        render={(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          />
        )}
      />
       <Counter2
        render={(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          />
        )}
      /> */}


      {/* higher order comp */}
      {/* <ClickCounter name='dhilip'/> passing parameter type
      <HoverCounter/> */}

      {/* error boundary */}
      {/* <Main/> */}

      {/* portal */}
      {/* <PortalDemo/> */}

      {/* refs */}
      {/* <FRrefsParent/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemp/> */}

      {/* pure components */}
      {/* <ParentComp /> */}

      {/* fragments */}
      {/* <Table /> */}

      {/* lifeCycle Methods */}
      {/* <LifecycleA/> */}

      {/* form handling */}
      {/* <Form/> */}

      {/* list rendering */}
      {/* <NameList/> */}

      {/* conditional rendering */}
      {/* <UserGreeting /> */}

      {/* passing method as props */}
      {/* <ParentComponent/> */}

      {/* event handling in class and func comp */}
      {/* <FunctionClick /> */}
      {/* <ClassClick/> */}
      {/* <EventHand /> */}

      {/* states in class components */}
      {/* <Message />
      <Counter /> */}

      {/* props */}
      {/* props in functional components */}
      {/* <Greet name="dhilip">
        <p>Hello guys i am doing react app!!</p>
      </Greet>
      <Greet name="bharath">
        <button>click me</button>
      </Greet> 
      <Greet name='kavya' />
      <Greet name='kavin' /> */}

      {/* props in class component */}
      {/* <Welcome name='dhilip'/>  */}

      {/* <Classcomponent name="dhilip kumar">
        <p>this guy is fool</p>
      </Classcomponent>
      <Classcomponent name="dhilip kumar">
        <button>Action</button>
      </Classcomponent>
      <Hello /> */}

      <UseMemoWords/>
      {/* <UseMemoCounter/> */}
    </div>
  );
}

export default App;
