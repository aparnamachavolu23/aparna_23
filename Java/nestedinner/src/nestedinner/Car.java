package nestedinner;

public class Car {
	  String carName;
	    String carType;
	    public Car(String name, String type) {
	        this.carName = name;
	        this.carType = type;
	    }
	    private String getCarName() {
	        return this.carName;
	    }
	    class Engine {
	        String engineType;
	        void setEngine() {
	// Accessing carType property of Car
	            if(Car.this.carType.equals("4WD")){
	// Invoking method getCarName() of Car
	                if(Car.this.getCarName().equals("Crysler")) {
	                    this.engineType = "Bigger";
	                } else {
	                    this.engineType = "Smaller";
	                }
	            }else{
	                this.engineType = "Bigger";
	            }
	        }
	        String getEngineType(){
	            return this.engineType;
	        }
	    }
	}


