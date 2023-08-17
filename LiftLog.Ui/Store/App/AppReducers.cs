using Fluxor;

namespace LiftLog.Ui.Store.App;


public static class AppReducers
{
    [ReducerMethod]
    public static AppState SetTitle(AppState state, SetPageTitleAction action) => state with { Title = action.Title };

    [ReducerMethod]
    public static AppState SetProToken(AppState state, SetProTokenAction action) => state with { ProState = new(action.ProToken) };
}
