import React from "react";
import Routes from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./contexts/Auth";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

