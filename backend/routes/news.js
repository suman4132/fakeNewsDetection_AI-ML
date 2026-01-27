const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const History = require('../models/History');
// const { spawn } = require('child_process'); // <--- UNCOMMENT WHEN INTEGRATING PYTHON MODEL

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// @route   POST api/analyze
// @desc    Analyze news (Integrate ML Model Here)
// @access  Private
router.post('/analyze', auth, upload.single('file'), async (req, res) => {
    const startTime = Date.now();
    
    try {
        if (!req.file) {
            return res.status(400).json({ detail: 'Please upload an image file for analysis' });
        }

        /* 
           ---------------------------------------------------------
           [ML INTEGRATION POINT] 
           Replace this Simulated block with your actual ML Model code.
           
           Option 1 (Python Script):
           const pythonProcess = spawn('python', ['path/to/predict.py', req.file.buffer.toString('base64')]);
           
           Option 2 (External Algo/API):
           const response = await axios.post('http://localhost:5000/predict', { image: req.file });
           ---------------------------------------------------------
        */

        // --- BEGIN SIMULATION ---
        // Simulate Machine Learning Processing Delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock Prediction Logic (Randomized for demonstration)
        const isFake = Math.random() > 0.5;
        const confidence = (85 + Math.random() * 14).toFixed(1);
        // --- END SIMULATION ---

        const endTime = Date.now();
        const duration = ((endTime - startTime) / 1000).toFixed(2);

        // Save Analysis Result to Database
        const newHistory = new History({
            user: req.user.id,
            title: `Analysis of ${req.file.originalname}`,
            prediction: isFake ? 'Fake' : 'Real',
            confidence: parseFloat(confidence),
            imageUrl: '', 
            timestamp: new Date()
        });

        await newHistory.save();

        res.json({
            prediction: isFake ? 'Fake' : 'Real',
            confidence: parseFloat(confidence),
            probabilities: {
                real: isFake ? 0.1 : 0.9,
                fake: isFake ? 0.9 : 0.1
            },
            features_detected: [
                isFake ? 'Sensationalist Headline' : 'Verified Source',
                isFake ? 'High Biased Language' : 'Neutral Tone',
                isFake ? 'Unverified Domain' : 'fact-checked'
            ],
            analysis_time: `${duration}s`,
            timestamp: newHistory.timestamp
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/history
// @desc    Get user's analysis history
// @access  Private
router.get('/history', auth, async (req, res) => {
    try {
        const history = await History.find({ user: req.user.id }).sort({ timestamp: -1 });
        
        // Map to frontend expectation
        const formattedHistory = history.map(item => ({
            id: item._id,
            title: item.title,
            prediction: item.prediction,
            confidence: item.confidence,
            date: new Date(item.timestamp).toLocaleString('en-US', { hour12: false }).replace(',', '')
        }));

        res.json(formattedHistory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
