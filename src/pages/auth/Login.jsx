import { motion } from "framer-motion";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl mb-4 bg-slate-800"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl mb-4 bg-slate-800"
        />

        <button className="w-full bg-blue-600 p-3 rounded-xl">
          Login
        </button>
      </motion.div>
    </div>
  );
}

export default Login;