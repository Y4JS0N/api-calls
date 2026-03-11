const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  try {
    // This points to the root of your project folder
    const jsonDirectory = path.join(process.cwd(), 'countrydomain.json');
    
    // Read the file content
    const fileContents = fs.readFileSync(jsonDirectory, 'utf8');
    
    // Parse the JSON
    const data = JSON.parse(fileContents);
    
    // Send it back
    res.status(200).json(data);
  } catch (error) {
    // This will help you see the actual error in Vercel Logs
    res.status(500).json({ 
      error: "Failed to load data", 
      details: error.message 
    });
  }
}