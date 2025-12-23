export const register = async (req, res) => {
    try {
        res.send("register controller")
    } catch (error) {
        
    }
}

export  const signin = async (req, res) => {
    try {
       res.send("sing in controller");
    } catch (error) {
        
  }
};

export const logout = async (req, res) => {
    try {
       res.send("logout controller");
    } catch (error) {
        
  }
};

export default {
    register,
    signin,
    logout
}