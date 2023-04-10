import React from 'react';

const Blog = () => {
      return (
            <div className='w-[80%] mx-auto'>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                              Question 1:     when should you used context api ?
                        </div>
                        <div className="collapse-content">
                              <p>React Context is a way for a child component to access a value in a parent component.

                                    One familiar problem in React is what is popularly known as prop drilling.

                                    Prop drilling occurs in situations where you’re looking to get the state from the top of your react tree to the bottom and you end up passing props through components that do not necessarily need them.

                                    React Context solves the problem of props drilling. It allows you to share props or state with an indirect child or parent.

                                    Ordinarily, you’d use a state management library like Redux or Mobx, but what if you don’t want to? Or the data to be passed is so minute that using a state management library would be overkill.

                                    This is where the new React Context API comes in.</p>
                        </div>

                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                        <div className="collapse-title text-xl font-medium">
                              Question 2:    What is Custom Hook ?
                        </div>
                        <div className="collapse-content">
                              <p>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. When and How to Use.</p>
                        </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                        <div className="collapse-title text-xl font-medium">
                              Question 3:    What is useref ?
                        </div>
                        <div className="collapse-content">
                              <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</p>
                        </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                        <div className="collapse-title text-xl font-medium">
                              Question 3:    What is useref ?
                        </div>
                        <div className="collapse-content">
                              <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</p>
                        </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                        <div className="collapse-title text-xl font-medium">
                              Question 4:    What is useemomo ?
                        </div>
                        <div className="collapse-content">
                              <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
                        </div>
                  </div>
            </div>
      );
};

export default Blog;