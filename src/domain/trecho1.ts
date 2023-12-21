// Este é um trecho do código responsável por exibir uma lista de componentes. Na sua visão, quais pontos de melhoria você aplicaria no
// código abaixo?

type StoreCardProps = {
  id: number;
  name: string;
  address: string;
  createdAt: Date;
}

const StoreCard = ({ id, name, address, createdAt }: StoreCardProps) => {
  return (
    <View style={{ backgroundColor: 'white', padding: 16 }}>
      <Tex style={{ fontWeight: 'bold' }}>{id} - {name}</Text>
      <Tex>{address}</Text>
      <Tex>{name}</Text>
      <Tex>{formatDatetime(createdAt)}</Text>
    </View>
   );
}
  
type StoresListProps = {
  stores: any[];
}
  
export const StoresList = ({ stores }: Props) => {
  return stores.map(s => <StoreCard {...s} />);
}