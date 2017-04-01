package service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
//import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class searchQuery {
	
	private BufferedReader br;
//	private FileWriter fr;
	public searchQuery() throws IOException {
		br = new BufferedReader( new FileReader(new File(Path.gamelist)));
//		fr = new FileWriter(path.resultlocation);
	}
	
	public ArrayList<String> search(String query) throws IOException {
		String line = "";
//		String id = "";
		ArrayList<String> result = new ArrayList<String>();  
//		fr.append("{\n");
//		fr.append("\t\"resultlist\": {\n");
//		fr.append("\t\t\"apps\": [\n");
		while ((line = br.readLine()) != null) {
			if(line.contains(query)) {
//				fr.append("\t\t\t{\n");
//				fr.append(id + "\n");
//				fr.append(line + "\n");
//				fr.append("\t\t\t},\n");
				result.add(line.trim().substring(8));
				System.out.println(line);
			}
//			id = line;
		}
		
		System.out.println(result.toString());
		br.close();
		return result;
//		fr.close();
	}
	
//	public static void main(String args[]) throws IOException{
//		searchQuery t = new searchQuery();
//		t.search("ota");
//	}

}
