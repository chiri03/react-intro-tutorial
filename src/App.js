function App() {

  return (
    <div className='wrapper'>
      <textarea 
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: 'lightgray' }}
      />
   </div>
  )
}
export default App;