// stwórz hook useSetState, w którym 
// odtworzysz możliwość zmiany state przez częściowe nadpisanie
// (identyczne działanie jak to co ma this.setState)

const useSetState = (initialState) =>{
    const [state, regularSetState] = useState(initialState);

    const setPartialState = newState => {
      regularSetState(prevState => ({
        ...prevState,
        ...newState
      }));
    };
  
    return [state, setPartialState];
    // return [state, setPartialState]
}