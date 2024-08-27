import { useState } from 'react'

import ContactInfo from './components/ContactInfo'
import EducationalInfo from './components/EducationInfo'
import WorkExperience from './components/WorkExperience'

import './App.css'

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <header>
    </header>
    <main>
      <div className='cv-input-container'>
        <Panel
        title="Contact Information"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
        >
          <ContactInfo></ContactInfo>
        </Panel>
        <Panel
        title="Education"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
        >
          <EducationalInfo></EducationalInfo>
        </Panel>
        <Panel
        title="Work Experience"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
        >
          <WorkExperience></WorkExperience>
        </Panel>
      </div>
      <div className='cv-display-container'>
        
      </div>
    </main>
    <footer>
    </footer>
    </>
  )
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

export default App
