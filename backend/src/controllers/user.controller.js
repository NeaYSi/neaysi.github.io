import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// eslint-disable-next-line
export const login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    const passwordValid = await bcrypt.compare(req.body.password, user.password);
    if (passwordValid) {
      const token = jwt.sign({
        id: user.id,
        email: user.email,
      }, 'CECI_EST_A_REMPLACER');
      res.status(200).json({ token });
    } else {
      res.status(400).json({ error: 'Password Incorrect' });
    }
  } else {
    res.status(404).json({ error: 'User does not exist' });
  }
};
