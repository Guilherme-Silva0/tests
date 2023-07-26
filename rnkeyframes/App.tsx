import { Button, View } from "react-native";
import { styles } from "./styles";
import { Message } from "./src/components/Message";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {show && <Message />}

      <Button
        title={show ? "Fechar Mensagem" : "Exibir Mensagem"}
        onPress={() => setShow((oldShow) => !oldShow)}
      />
    </View>
  );
}
