 function Tabs( {childern, buttons, ButtonsContainer ='menu'}) {
 //const ButtonsContainer = buttonsContainer;
 
    return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {childern}
    </>
  );
}
export default Tabs;