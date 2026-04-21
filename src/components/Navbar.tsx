import React, { useEffect, useState } from 'react';
import { auth, signInWithGoogle } from '../lib/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (u) => {
        setUser(u);
      });
      return () => unsubscribe();
    }
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    if (auth) signOut(auth);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 h-16 glass">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white font-['Inter']">D</div>
        <span className="text-xl font-semibold tracking-tight uppercase italic text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>DevFolio.in</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#how" className="hover:text-white transition-colors">How it Works</a>
        <a href="#templates" className="hover:text-white transition-colors">Templates</a>
        <a href="#pricing" className="hover:text-white transition-colors text-indigo-400">Pricing</a>
        <a href="#pay" className="hover:text-white transition-colors">Pay & Activate</a>
        <a href="#owner" className="hover:text-white transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-[11px] font-bold text-white leading-none capitalize">{user.displayName || 'Developer'}</p>
              <button onClick={handleLogout} className="text-[9px] text-gray-500 hover:text-red-400 uppercase tracking-widest font-black">Log Out</button>
            </div>
            <img 
              src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} 
              alt="Avatar" 
              className="w-8 h-8 rounded-full border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <>
            <button className="text-xs uppercase tracking-widest text-gray-400 font-bold hover:text-white transition-colors" onClick={handleLogin}>
              Log In
            </button>
            <button 
              className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tighter hover:bg-gray-200 transition-all"
              onClick={handleLogin}
            >
              Sign Up Free
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
