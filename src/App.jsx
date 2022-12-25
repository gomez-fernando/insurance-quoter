import AppIinsurance from "./components/AppIinsurance"
import {QuoterProvider} from "./context/QuoterProvider"

function App() {

  return (
    <QuoterProvider>
      <AppIinsurance />
    </QuoterProvider>
  )
}

export default App
