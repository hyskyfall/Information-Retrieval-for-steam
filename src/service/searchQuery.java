package service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashSet;

public class SearchQuery {
	private BufferedReader br;
	private BufferedReader br2;
	private FileWriter fr;
	private Stemmer stm;
	private HashSet<String> stopword;

	public SearchQuery(String path) throws IOException {
		br = new BufferedReader(new FileReader(new File(path)));
		br2 = new BufferedReader(new FileReader();//stop word path
		fr = new FileWriter(path.resultlocation);
		stm = new Stemmer();
		stopword = new HashSet();
		String sw = "";
		while((sw = br2.readLine())!=null){
			stopword.add(sw);
		}
	}

	public boolean isStopword(String word) throws IOException {
		// return true if the input word is a stopword, or false if not
		if (stopword.contains(word))
			return true;
		return false;
	}

	public ArrayList<String> search(String query) throws IOException {
		ArrayList<String> result = new ArrayList();
		String line = "";
		String temp = query;
		temp = temp.replaceAll("[\\pP\\p{Punct}]", "");// remove punctuations
		temp = temp.trim();// remove first and last all while space
		temp.replaceAll(" +", " ");// change multiple whilespace to 1 whitespace
		temp = temp.toLowerCase();
		String[] st = temp.split(" ");
		temp = "";
		for (int i = 0; i < st.length; i++) {
			if (!isStopword(st[i])) {
				char[] word = st[i].toCharArray();
				stm.add(word, word.length);
				stm.stem();
				temp = temp + " " + stm.toString();
			}
		}
		while ((line = br.readLine()) != null) {
			if (line.contains(temp))
				while ((line = br.readLine()) != null) {
					if (line.contains(query)) {
						// fr.append("\t\t\t{\n");
						// fr.append(id + "\n");
						// fr.append(line + "\n");
						// fr.append("\t\t\t},\n");
						result.add(line.substring(8));
						System.out.println(line);
					}
					// id = line;
				}
		}
		System.out.println(result.toString());
		br.close();
		return result;
		// fr.close();

	}
}

