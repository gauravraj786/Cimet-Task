import Api from '../../api/Api';

export default async function apiRequest(req, res) {
  const apiClient = new Api();

  try {
    const { data } = await apiClient.generateToken();
    res.status(200).json(data);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || 'Internal Server Error';

    res.status(statusCode).json({
      error: {
        message: errorMessage,
      },
    });
  }
}
