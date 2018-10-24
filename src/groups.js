import Intro from '!raw-loader!./components/Intro.vue';
import HelloWorld from '!raw-loader!./components/HelloWorld.vue';
import AttributeBinding from '!raw-loader!./components/AttributeBinding.vue';
import SimpleList from '!raw-loader!./components/SimpleList.vue';
import UserInput from '!raw-loader!./components/UserInput.vue';
import CustomComponent from '!raw-loader!./components/CustomComponent.vue';
import ComponentProps from '!raw-loader!./components/ComponentProps.vue';
import InstanceLifecycle from '!raw-loader!./components/InstanceLifecycle.vue';
import Interpolation from '!raw-loader!./components/Interpolation.vue';
import BuiltInDirectives from '!raw-loader!./components/BuiltInDirectives.vue';
import ComputedProperties from '!raw-loader!./components/ComputedProperties.vue';
import Watcher from '!raw-loader!./components/Watcher.vue';
import ClassBindings from '!raw-loader!./components/ClassBindings.vue';
import StyleBindings from '!raw-loader!./components/StyleBindings.vue';
import Conditionals from '!raw-loader!./components/Conditionals.vue';
import ExtendedList from '!raw-loader!./components/ExtendedList.vue';
import FilteredList from '!raw-loader!./components/FilteredList.vue';
import ComponentList from '!raw-loader!./components/ComponentList.vue';
import EventHandling from '!raw-loader!./components/EventHandling.vue';
import VModelBinding from '!raw-loader!./components/VModelBinding.vue';
import Transition from '!raw-loader!./components/Transition.vue';
import TransitionGroup from '!raw-loader!./components/TransitionGroup.vue';
import ComponentMessaging from '!raw-loader!./components/ComponentMessaging.vue';
import PropsPassing from '!raw-loader!./components/PropsPassing.vue';
import PropsValidation from '!raw-loader!./components/PropsValidation.vue';
import Slots from '!raw-loader!./components/Slots.vue';
import DynamicComponent from '!raw-loader!./components/DynamicComponent.vue';
import KeepAlive from '!raw-loader!./components/KeepAlive.vue';
import AsyncComponent from '!raw-loader!./components/AsyncComponent.vue';
import Mixins from '!raw-loader!./components/Mixins.vue';
import CustomDirectives from '!raw-loader!./components/CustomDirectives.vue';
import Filters from '!raw-loader!./components/Filters.vue';
import ErrorCapturing from '!raw-loader!./components/ErrorCapturing.vue';
import RenderFunction from '!raw-loader!./components/RenderFunction.vue';
import ProvideInject from '!raw-loader!./components/ProvideInject.vue';
import InstanceEvents from '!raw-loader!./components/InstanceEvents.vue';
import ReactivityCaveats from '!raw-loader!./components/ReactivityCaveats.vue';
import NextTick from '!raw-loader!./components/NextTick.vue';
import BasicHttp from '!raw-loader!./components/BasicHttp.vue';
import Interceptor from '!raw-loader!./components/Interceptor.vue';
import Resource from '!raw-loader!./components/Resource.vue';
import StatefulComponent from '!raw-loader!./components/StatefulComponent.vue';
import VuexStore from '!raw-loader!./components/VuexStore.vue';

import Exercise1 from '!raw-loader!./components/Exercise1.vue';
import Exercise2 from '!raw-loader!./components/Exercise2.vue';
import Exercise3 from '!raw-loader!./components/Exercise3.vue';
import Exercise4 from '!raw-loader!./components/Exercise4.vue';

const groups = [
  {
    name: 'Start',
    components: [
      { name: 'Introduction', code: Intro },
      { name: 'Hello Vue', code: HelloWorld },
      { name: 'Attribute Binding', code: AttributeBinding },
      { name: 'Simple List', code: SimpleList },
      { name: 'User Input and Reactive Binding', code: UserInput },
      { name: 'Custom Component', code: CustomComponent },
      { name: 'Component and Props', code: ComponentProps },
      { name: 'Exercise 1', code: Exercise1 },
    ],
  },
  {
    name: 'Essentials',
    components: [
      { name: 'Instance Lifecycle', code: InstanceLifecycle },
      { name: 'Interpolation', code: Interpolation },
      { name: 'Built-in Directives', code: BuiltInDirectives },
      { name: 'Computed Properties', code: ComputedProperties },
      { name: 'Watcher', code: Watcher },
      { name: 'Exercise 2', code: Exercise2 },
      { name: 'Class Bindings', code: ClassBindings },
      { name: 'Style Bindings', code: StyleBindings },
      { name: 'Conditionals', code: Conditionals },
      { name: 'Extended List', code: ExtendedList },
      { name: 'Exercise 3', code: Exercise3 },
      { name: 'Filtered List', code: FilteredList },
      { name: 'Component List', code: ComponentList },
      { name: 'Event Handling', code: EventHandling },
      { name: 'v-model Binding', code: VModelBinding },
      { name: 'Exercise 4', code: Exercise4 },
    ],
  },
  {
    name: 'Components',
    components: [
      { name: 'Component Messaging', code: ComponentMessaging },
      { name: 'Props Passing', code: PropsPassing },
      { name: 'Props Validation', code: PropsValidation },
      { name: 'Slots', code: Slots },
    ],
  },
  {
    name: 'Animation',
    components: [
      { name: 'Transition', code: Transition },
      { name: 'Transition Group', code: TransitionGroup },
    ],
  },
  {
    name: 'Reusability',
    components: [
      { name: 'Mixins', code: Mixins },
      { name: 'Custom Directives', code: CustomDirectives },
      { name: 'Filters', code: Filters },
    ],
  },
  {
    name: 'Advanced',
    components: [
      { name: 'Dynamic Component', code: DynamicComponent },
      { name: 'Keep Alive', code: KeepAlive },
      { name: 'Asynchronous Component', code: AsyncComponent },
      { name: 'Error Capturing', code: ErrorCapturing },
      { name: 'Render Function', code: RenderFunction },
      { name: 'Provide and Inject', code: ProvideInject },
      { name: 'Instance Events', code: InstanceEvents },
      { name: 'Reactivity Caveats', code: ReactivityCaveats },
      { name: 'Next Tick', code: NextTick },
    ],
  },
  {
    name: 'Resource handling',
    components: [
      { name: 'Basic HTTP', code: BasicHttp },
      { name: 'Interceptor', code: Interceptor },
      { name: 'Resource', code: Resource },
    ],
  },
  {
    name: 'State management',
    components: [
      { name: 'Stateful Component', code: StatefulComponent },
      { name: 'Vuex Store', code: VuexStore },
    ],
  },
];

export default groups;
