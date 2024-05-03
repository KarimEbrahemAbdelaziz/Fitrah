import SwiftUI

public struct AzkarListView: View {
    public var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundColor(.accentColor)
            Text("Azkar List in SwiftUI!")
        }
        .padding()
    }
    
    public static func returnTrue() -> Bool {
        return true
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        AzkarListView()
    }
}