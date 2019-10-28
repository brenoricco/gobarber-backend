import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      // return only attributes id, name, email, avatar_id
      attributes: ['id', 'name', 'email', 'avatar_id'],
      // include file data in 'avatar'
      include: [
        {
          model: File,
          as: 'avatar',
          // return only the attributes
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
