import java.util.Random;
import java.util.Vector;

/**
 * Clase a partir de la cual vamos a generar el WSDL, mediantes Axis y bottom up
 * @author ur00
 *
 */
public class DreddSays {

	private Vector<String> quotes = new Vector<String>();
	private Random random = new Random();
	
	
	public DreddSays () {
		quotes.add("Compile error: automatic fail.");
		quotes.add("Unit test error: automatic fail.");
		quotes.add("Stallone is not the law. I'm the law.");
		quotes.add("You have been warned.");
		quotes.add("Judgement time...");
	}
	
	/**
	 * metodo que vamos a exponer e nuestro clientes
	 * @return
	 */
	public String randomQuote () {
		return quotes.get(random.nextInt(quotes.size()));
	}
}
