package servlet;

import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JSONException;
//import org.apache.commons.beanutils.BeanUtils;
import service.GameList;
import service.searchQuery;

/**
 * Servlet implementation class GameResult
 */
@WebServlet("/GameResult")
public class GameResult extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GameResult() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doGet work");
		response.setContentType("text/html");
		response.setCharacterEncoding("GBK");
		//get user Input from front-side
		String inputSearch = request.getHeader("MyHeader");
	//handle data
		//return Search result
		ArrayList<String> schRlt = new searchQuery().search(inputSearch);
		//创建JsonArrau
//		JSONArray array = new JSONArray();
		JSONObject son = new JSONObject();
		for(int i=0; i<1; i++){
			son.put("Rid", 4067);
			son.put("Rname", "dota2");
//			array.add(son);
		}
		//创建JsonObject
//		JSONObject root = new JSONObject();
//		root.put("result", array);
		
//		GameList gl = new GameList(); 
//		String resCtt = gl.gamelist;
		//设置response
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json;charset=utf-8");
		response.setHeader("cache-control", "no-cache");
		//传输json
		PrintWriter out = response.getWriter();
		out.write(son.toString());
		out.flush();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
//	public static void main(String args[]){
//		JSONArray array = new JSONArray();
//		for(int i=0; i<2; i++){
//			JSONObject son = new JSONObject();
//			son.put("Rid", i);
//			son.put("Rname", "qifei"+i);
//			
//			array.add(son);
//		}
//	}
}
