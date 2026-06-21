import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

from flask import Flask, render_template, request, jsonify
import pandas as pd
import numpy as np
import joblib
from tensorflow.keras.models import load_model
import time

app = Flask(__name__)

model = load_model("obesity_model.keras")
scaler = joblib.load("scaler.pkl")
encoders = joblib.load("encoders.pkl")

columns = [
    "Age", "Gender", "Height", "Weight", "CALC",
    "FAVC", "FCVC", "NCP", "SCC", "SMOKE",
    "CH2O", "family_history_with_overweight",
    "FAF", "TUE", "CAEC", "MTRANS"
]
