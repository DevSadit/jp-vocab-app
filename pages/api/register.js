import connectMongo from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { name, email, password, photo } = req.body;

  // Validation
  if (!name || !email || !password || !photo) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await connectMongo();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Save user
    const newUser = new User({ name, email, photo, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
