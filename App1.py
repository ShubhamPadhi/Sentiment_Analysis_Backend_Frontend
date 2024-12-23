from flask import Flask, render_template, request
import joblib

NB_model = joblib.load('NB_model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index2.html')

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        input_text = request.form['input_text']
        
        input_TFIDF = vectorizer.transform([input_text])
        
       
        predicted_sentiment = NB_model.predict(input_TFIDF)
        
    
        return render_template('index2.html', prediction=predicted_sentiment[0])
    else:
        return "This route only accepts POST requests"

if __name__ == '__main__':
    app.run(debug=True)
