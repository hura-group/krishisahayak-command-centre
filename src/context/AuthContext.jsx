import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { MEMBERS, validateLogin } from '../data/members';

const AuthContext = createContext(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export const AuthProvider = ({ children }) => {
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [isConfirmingLogout, setIsConfirmingLogout] = useState(false);
    const [showLogoutLoverAnimation, setShowLogoutLoverAnimation] = useState(false);
  
    // Restore session on mount
    useEffect(() => {
      const session = sessionStorage.getItem('logged_in_member_id');
      if (session && MEMBERS[session]) {
        setMember(MEMBERS[session]);
      }
      setLoading(false);
    }, []);
  
    const login = useCallback((username, password) => {
      const result = validateLogin(username, password);
      if (result.success) {
        sessionStorage.setItem('logged_in_member_id', result.member.id);
        setMember(result.member);
        return { success: true };
      }
      return { success: false, message: result.message };
    }, []);
  
    const logout = useCallback(() => {
      sessionStorage.removeItem('logged_in_member_id');
      setMember(null);
      setIsLoggingOut(false);
      setIsConfirmingLogout(false);
      setShowLogoutLoverAnimation(false);
    }, []);
  
    return (
      <AuthContext.Provider value={{ 
        member, login, logout, loading, 
        isLoggingOut, setIsLoggingOut,
        isConfirmingLogout, setIsConfirmingLogout,
        showLogoutLoverAnimation, setShowLogoutLoverAnimation 
      }}>
        {children}
      </AuthContext.Provider>
    );
  };
