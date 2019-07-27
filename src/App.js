import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ChildComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
// since Greet is exported as default, it can be imported with any name.
// like: import MyComponent from './components/Greet';
// However, if it was exported as named export like:
// export const Greet = () => ...
// then it should be imported like:
// import { Greet } from './components/Greet'

import Greet from './components/Greet';
import Inline from './components/Inline';
import './components/appStyles.css';
import styles from './components/appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentOfRegComponent from './components/ParentOfRegComponent';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalsDemo from './components/PortalsDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClicksCounter from './components/ClicksCounter';
import User from './components/User';
import CounterPropsExample from './components/CounterPropsExample';
import ClickCounter2 from './components/ClickCounter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      {/* <PostList /> */}
      <PostForm />
      {/* <ClicksCounter name="Munnu" /> */}
      {/* <User name={(isLoggedIn) => isLoggedIn ? 'Munnu' : 'Guest'} /> */}
      {/* <CounterPropsExample render={(count, incrementCount) => (
        <ClickCounter2 count={count} incrementCount={incrementCount} />
      )} /> */}
      {/* <CounterPropsExample>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </CounterPropsExample> */}
      {/* <UserProvider value="Munnu">
        <ComponentC />
      </UserProvider> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>  
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <FRParentInput /> */}
      {/* <PortalsDemo /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <ParentOfRegComponent /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Inline className='error' /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Greet />
      <Welcome /> */}
      {/* <Hello name="Clark" heroName="Batman">
        <p>This is children props</p>
      </Hello>
      <Hello name="Bruce" heroName="Superman">
        <button>Action</button>
      </Hello>
      <Hello name="Diana" heroName="Wonder Woman" />
      <Welcome name="Jagga" heroName="Jagga Father" />
      <Welcome name="Nobody" heroName="Nobody father" />
      <Welcome name="Somebody" heroName="Somebody mother" />
      <Message />
      <Counter /> */}
      {/* <EventBind />
      <FunctionClick />
      <ClassClick /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
    </div>
  );
}

export default App;
