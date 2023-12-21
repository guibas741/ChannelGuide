// O código abaixo apresenta um componente complexo. Avalie detalhadamente este trecho, apontando os pontos de melhoria que encontrar.

import React from 'react'

const Button = React.memo((props) => {
  return <Button styles={styles.button} title="Enviar" {...props} />;
});

const Container = React.memo((props) => {
  return (
    <View style={{ backgroundColor: 'gray', marginBottom: 10 }}>
    {props.children}
    </View>
  ;
});

const Card = React.memo((props) => {
  return (
    <View style={{ backgroundColor: 'black', padding: 8 }}>
      {props.children}
    </View>
  ;
});

export const ComplexScreen = ({ complexData }) => {
  const [formData, setFormData] = useState();
  const parsedComplexData = expensiveFunction(complexData);
  
  useEffect(() => {
    setInterval(() => {
      fetchNewComplexData();
    }, 5000);
  });

  const getTotalValue = () => {
    let total = 0;
    complexData.map(i => {
    total += i.value;
    return i;
    );
  }

  return (
    <Container>
      {parsedComplexData.map(item => (
        <Card>
          <Text>{item.title}</Text>
          <TextInput
            value={expensiveParseValue(item)}
            onChangeText={(value) => setFormData(formData[item].value = value)}
        </Card>
      ))}
    <Button onPress={() => navigation.navigate("SubmitScreen", {...formData})}>
  </Container>
 )
}