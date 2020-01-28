package nestedinner;

public class Carmain {
	public static class CarMain {
	    public static void main(String[] args) {
	        Car car1 = new Car("Mazda", "8WD");
	        Car.Engine engine = car1.new Engine();
	        engine.setEngine();
	        System.out.println("Engine Type for 8WD= " + engine.getEngineType());
	        Car car2 = new Car("Crysler", "4WD");
	        Car.Engine c2engine = car2.new Engine();
	        c2engine.setEngine();
	        System.out.println("Engine Type for 4WD = " + c2engine.getEngineType());
	    }
	}

}
