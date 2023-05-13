import React from 'react';
import Counter from './useState/Counter';
import CounterTwo from './useState/CounterTwo';
import ChangeTitle from './useEffect/ChangeTitle';
import ConditionalUseEffect from './useEffect/ConditionalUseEffect';
import RunEffectOnlyOnce from './useEffect/RunEffectOnlyOnce';
import UseEffectWithCleanUp from './useEffect/UseEffectWithCleanUp';
import UseEffectWithIncorrectDependency from './useEffect/UseEffectWithIncorrectDependency';
import ComponentA from './useContext/ComponentA';
import SimpleReducer from './useReducer/SimpleReducer';
import ComplexReducer from './useReducer/ComplexReducer';
import MultipleReducer from './useReducer/MultipleReducer';
import UseMemoCounter from './useMemo/UseMemoCounter';
import UseCallbackComponent from './useCallback/UseCallbackComponent';
import UseMemoWords from './useMemo/UseMemoWords';

export const UserContext = React.createContext();
export const TechContext = React.createContext();

function App() {
  return (
    <div className='App'>
      {/* useState */}
      {/* <Counter/> */}
      {/* useState with prev count */}
      {/* <CounterTwo/> */}

      {/* useEffect */}
      {/* <ChangeTitle/> */}
      {/* useEffect - conditionally run effects */}
      {/* <ConditionalUseEffect/> */}
      {/* useEffect - run only once */}
      {/* <RunEffectOnlyOnce/> */}
      {/* useEffect - componentWillUnmount */}
      {/* <UseEffectWithCleanUp/> */}
      {/* <UseEffectWithIncorrectDependency/> */}

      {/* useContext */}
      {/* <UserContext.Provider value={'dhilip'}>
        <TechContext.Provider value={'reactJs'}>
          <ComponentA />
        </TechContext.Provider>
      </UserContext.Provider> */}

      {/* useReducer */}
      {/* <SimpleReducer/> */}
      {/* <ComplexReducer/> */}
      {/* <MultipleReducer/> */}

      {/* useCallback */}
      {/* <UseCallbackComponent/> */}

      {/* useMemo */}
      {/* <UseMemoCounter/> */}
      {/* <UseMemoWords /> */}
    </div>
  );
}

export default App;
