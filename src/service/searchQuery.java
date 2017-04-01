package service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
//import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;

public class searchQuery {
	
	private BufferedReader br;
//	private FileWriter fr;
	public searchQuery(String path) throws IOException {
//		URL url = this.getClass().getResource( "/stop.txt" );
//		String path = this.getServletContext().getRealPath("/WEB-INF/classes/gamelist.txt");
		br = new BufferedReader( new FileReader(new File(path)));
	}
	
	public ArrayList<String> search(String query) throws IOException {
		System.out.println("input is ="+query);
		String line = "";
//		String id = "";
		ArrayList<String> result = new ArrayList<String>();  
		while ((line = br.readLine()) != null) {
			if(line.contains(query)) {
				result.add(line.trim().substring(8));
			}
		}
//		System.out.println
		System.out.println(result.toString());
		br.close();
		return result;
	}
	

}
