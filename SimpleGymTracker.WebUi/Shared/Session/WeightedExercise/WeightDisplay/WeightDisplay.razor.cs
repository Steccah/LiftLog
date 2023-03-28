namespace SimpleGymTracker.WebUi.Shared.Session.WeightedExercise.WeightDisplay;

public partial class WeightDisplay
{
    private bool PopupActive { get; set; }

    private decimal EditorWeight { get; set; }

    public void OnOpenClick()
    {
        EditorWeight = Exercise.Weight;
        PopupActive = true;
    }

    public void OnCloseClick()
    {
        PopupActive = false;
    }

    public void OnSaveClick()
    {
        UpdateWeightForExercise(EditorWeight);
        PopupActive = false;
    }

    public void OnWeightIncrementClick()
    {
        EditorWeight += Exercise.PlanExercise.KilogramsIncreaseOnSuccess;
    }

    public void OnWeightDecrementClick()
    {
        EditorWeight -= Exercise.PlanExercise.KilogramsIncreaseOnSuccess;
    }
}
