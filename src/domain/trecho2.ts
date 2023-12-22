// Este é um trecho de um formulário. Na sua visão, quais pontos de melhoria você aplicaria no código abaixo?

export const PromoterForm = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [age, setAge] = useState();
  const [store, setStore] = useState();
  const [retail, setRetail] = useState();

  const form = () => {
    navigation.navigate("FormValidationScreen", {
      name: name,
      password: password,
      confirmPassword: confirmPassword,
      age: age,
      store: store,
      retail: retail
    });
  };

  return (
    <View>
      <Text>Nome</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Idade</Text>
      <TextInput value={age} onChangeText={setAge} />
      <Text>Loja</Text>
      <TextInput value={store} onChangeText={setStore} />
      <Text>Rede</Text>
      <TextInput value={retail} onChangeText={setRetail} />
      <Text>Senha</Text>
      <TextInput value={password} onChangeText={setPassword} />
      <Text>Confirme sua senha</Text>
      <TextInput value={confirmPassword} onChangeText={setConfirmPassword} />
      <Button onPress={form} title="Enviar" />
    </View>
  );
};
