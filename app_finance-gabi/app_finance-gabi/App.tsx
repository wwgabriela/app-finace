import React, { useState, useEffect } from "react";
import 'react-native-url-polyfill/auto'
import { View, Text } from "react-native";
import { Session, createClient } from "@supabase/supabase-js";

import Auth from "./src/components/Auth";
import { supabase } from "./src/services/supabase";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./src/pages/Welcome";
import Home from "./src/pages/Home";
import Routes from "./src/routes";

const App: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup subscription on unmount
    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {session && session.user ? <Home session={session} /> : <Auth />}
      </NavigationContainer>
    </View>
  );
}

export default App;
