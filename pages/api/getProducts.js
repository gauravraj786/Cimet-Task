import Api from "../../utils/Api";

export default async function apiRequest(req, res) {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token not found"
      });
    }

    const apiClient = new Api();
    const { data } = await apiClient.getPlanList(token);
    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}
